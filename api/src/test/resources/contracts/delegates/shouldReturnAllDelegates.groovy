package contracts.delegates

import org.springframework.cloud.contract.spec.Contract

Contract.make {
	request {
		method 'GET'
		url 'api/delegates'
	}
	response {
		status 200
		body("""
  {
    "username": "test",
  }
  """)
		headers {
			header('Content-Type': 'application/json;charset=UTF-8')
		}
	}
}

Contract.make {
    request {
        method 'GET'
        url 'api/delegates'
    }
    response {
        status 200
        body("""
  {
    "username": "test",
  }
  """)
        headers {
            header('Content-Type': 'application/json;charset=UTF-8')
        }
    }
}
