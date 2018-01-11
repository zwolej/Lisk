package io.lisk.contracts;

import io.lisk.Controller.DelegateController;
import io.restassured.module.mockmvc.RestAssuredMockMvc;
import org.junit.Before;

public class MvcTest {

	@Before
	public void setup() {
		RestAssuredMockMvc.standaloneSetup(new DelegateController());
	}

}