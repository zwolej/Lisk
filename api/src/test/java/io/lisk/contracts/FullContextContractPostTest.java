package io.lisk.contracts;

import io.lisk.Application;
import io.lisk.Controller.PostController;
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
public abstract class FullContextContractPostTest {

    @Autowired
    private PostController postController;

    @Before
    public void setup() {
        RestAssuredMockMvc.standaloneSetup(postController);
    }

}
