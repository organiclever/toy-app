package com.toy_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.annotation.PostConstruct;
import java.io.File;

@SpringBootApplication
public class ToySpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToySpringApplication.class, args);
	}

	@PostConstruct
	public void init() {
		File dbsDirectory = new File("dbs");
		if (!dbsDirectory.exists()) {
			dbsDirectory.mkdir();
		}
	}

}
