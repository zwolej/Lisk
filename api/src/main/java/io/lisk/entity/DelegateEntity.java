package io.lisk.entity;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "Delegate")
public class DelegateEntity {

    @Id
    private String address;

    @NotBlank
    @Column(unique = true)
    private String username;

    @NotBlank
    private int poolShare;

    private String website;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPoolShare() {
        return poolShare;
    }

    public void setPoolShare(int poolShare) {
        this.poolShare = poolShare;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

}
