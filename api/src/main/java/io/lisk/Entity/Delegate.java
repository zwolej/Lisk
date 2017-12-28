package io.lisk.Entity;

import lombok.Getter;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class Delegate {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @NotBlank
    private String username;
    @NotBlank
    private String address;
	@NotBlank
	private int poolShare;
    private String publicKey;
    private String website;

}
