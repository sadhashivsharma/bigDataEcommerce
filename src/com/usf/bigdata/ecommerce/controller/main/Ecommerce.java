package com.usf.bigdata.ecommerce.controller.main;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Ecommerce {
	@Autowired
	private HttpServletRequest request;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String welcome()
	{
		return "Hello";
	}
}
