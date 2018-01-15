package io.lisk.contracts;

import io.lisk.Entity.DelegateEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class MvcFullTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void createClient() {
        ResponseEntity<DelegateEntity[]> responseEntity =
                restTemplate.getForEntity("/api/delegates", DelegateEntity[].class);
        System.out.println("size: " + responseEntity.getBody().length);
//        Client client = responseEntity.getBody();
//        assertEquals("Foo", "Foo");
    }
}
