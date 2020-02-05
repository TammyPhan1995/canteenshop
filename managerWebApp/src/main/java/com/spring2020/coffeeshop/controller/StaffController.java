package com.spring2020.coffeeshop.controller;

import com.spring2020.coffeeshop.domain.dto.StaffDto;
import com.spring2020.coffeeshop.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static com.spring2020.coffeeshop.util.ConstantUtil.CREATE_SUCCESS;

@RestController
@RequestMapping("/staffs")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping
    public String createStaff(@Valid @RequestBody StaffDto staffDto) {
        staffService.createStaff(staffDto);
        return CREATE_SUCCESS;
    }


}
