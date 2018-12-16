package com.company.herokupresentation;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class IndexController {
    @GetMapping("/")
        public String indexPageTest(Map<String, Object> model){
        return "index";
    }


    @RequestMapping(value = "/index2", method = RequestMethod.GET)
    public String indexPageTest2(Map<String, Object> model){
        return "jstrain";
    }
}

