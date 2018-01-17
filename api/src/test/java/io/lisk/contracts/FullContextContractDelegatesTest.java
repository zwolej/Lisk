package io.lisk.contracts;

import io.lisk.Application;
import io.lisk.controller.DelegateController;
import io.restassured.module.mockmvc.RestAssuredMockMvc;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,
        classes = Application.class)
public abstract class FullContextContractDelegatesTest {

    @Autowired
    private DelegateController delegateController;

    @Before
    public void setup() {
        RestAssuredMockMvc.standaloneSetup(delegateController);
    }

}
