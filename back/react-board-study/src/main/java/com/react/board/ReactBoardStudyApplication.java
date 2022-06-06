package com.react.board;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.react.board.**")
public class ReactBoardStudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactBoardStudyApplication.class, args);
	}

}
