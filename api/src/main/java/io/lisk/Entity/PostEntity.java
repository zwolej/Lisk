package io.lisk.Entity;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity(name = "Post")
public class PostEntity {

    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    private String nickname;

    @NotBlank
    private String body;

    @NotNull
    @Column(columnDefinition = "DATETIME")
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime createdAt;

    public PostEntity(String nickname, String body, LocalDateTime createdAt) {
        this.nickname = nickname;
        this.body = body;
        this.createdAt = createdAt;
    }

    public PostEntity() {
    }

    public long getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getBody() {
        return body;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
