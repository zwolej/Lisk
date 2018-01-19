package contracts.posts

import org.springframework.cloud.contract.spec.Contract

Contract.make {
    request {
        method 'GET'
        url '/api/public/posts'
    }
    response {
        status 200
        body("""
  [{"id":1,"nickname":"Marek","body":"Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.","createdAt":"2018-01-10 08:13:24"},{"id":2,"nickname":"Marek","body":"Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.","createdAt":"2018-01-10 03:02:24"},{"id":3,"nickname":"Jozek","body":"Etiam ex arcumentum.","createdAt":"2018-01-09 21:13:24"},{"id":4,"nickname":"Franek","body":"Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes","createdAt":"2018-01-09 13:19:24"},{"id":5,"nickname":"Zenek","body":"Cum sociis natoque penatibus et magnis dis parturient montes","createdAt":"2018-01-02 13:19:24"}]
  """)
        headers {
            header('Content-Type': 'application/json;charset=UTF-8')
        }
    }
}
