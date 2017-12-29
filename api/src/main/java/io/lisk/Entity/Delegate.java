package io.lisk.Entity;

import lombok.Getter;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
public class Delegate {

    @Id
    private String address;
    @NotBlank
    @Column(unique = true)
    private String username;
    @NotBlank
    private int poolShare;
    private String website;

}
