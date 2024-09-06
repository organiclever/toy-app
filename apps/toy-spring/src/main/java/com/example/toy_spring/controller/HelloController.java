package com.example.toy_spring.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class HelloController {

  @GetMapping("/hello")
  public Map<String, Object> hello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return Map.of("data", Map.of("message", "Hello " + name + "!"));
  }

}
