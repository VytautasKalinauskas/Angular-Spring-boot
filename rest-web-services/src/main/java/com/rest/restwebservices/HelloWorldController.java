package com.rest.restwebservices;

import Model.HelloEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path = "/api/hello/string")
    public String getHelloWorldString() {
        return "Hello world string";
    }

    @GetMapping(path = "/api/hello/bean")
    public List<HelloEntity> getHelloWorldBean() {
        List<HelloEntity> listas = new ArrayList<>();
        listas.add(new HelloEntity(0L,"name1", "HEY"));
        listas.add(new HelloEntity(1L, "name2", "CYA"));

        return listas;
    }

    @GetMapping(path = "/api/hello/bean/{id}")
    public HelloEntity getHelloWorldBeanById(@PathVariable("id") int id) {
        List<HelloEntity> listas = new ArrayList<>();
        listas.add(new HelloEntity(0L,"name1", "HEY"));
        listas.add(new HelloEntity(1L, "name2", "CYA"));
        if(id > listas.size() - 1)
            throw new RuntimeException("ID OUT OF BOUNDS! MAX ID: " + (listas.size() - 1));
        return listas.get(id);
    }
}
