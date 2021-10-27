package com.mjinvestments.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.mjinvestments.repositories")
@EntityScan(basePackages = "com.mjinvestments.POJOClasses")
@ComponentScan(basePackages = "com.mjinvestments.controllers")

@SpringBootApplication
public class Project2Application {

	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}

}
