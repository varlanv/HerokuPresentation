package com.company.herokupresentation;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class IndexController {
    @RequestMapping(value = "/index", method = RequestMethod.GET)
        public String indexPageTest(Map<String, Object> model){
        return "index";
    }
}
