package com.example.sentinel_be.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class HelloController {

  @GetMapping("/hello")
  public Map<String, Object> hello() {
    return Map.of("data", Map.of("message", "hello world"));
  }
}
