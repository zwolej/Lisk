package io.lisk.auth.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

public class TokenAuthenticationService {

    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 1 day
    private static final String SECRET = "ThisIsASecret";
    private static final String TOKEN_PREFIX = "Bearer";
    private static final String HEADER_STRING = "Authorization";
    private static final int TOKEN_CHAR_LENGHT = 7;

    public void addAuthentication(HttpServletResponse response, String username) {
        String JWT = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + " "+ JWT);
    }

    public Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        if(token == null || !token.startsWith(TOKEN_PREFIX)) {
            return null;
        }

        String username = Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token.substring(TOKEN_CHAR_LENGHT))
                .getBody()
                .getSubject();

        if (username == null) {
            return null;
        }

        return new AuthenticatedUser(username);
    }
}
