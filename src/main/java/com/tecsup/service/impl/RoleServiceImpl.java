package com.tecsup.service.impl;

import java.util.Collection;
import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecsup.domain.Role;
import com.tecsup.repository.RoleRepository;
import com.tecsup.service.IService;

@Service
public class RoleServiceImpl implements IService<Role> {

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Collection<Role> findAll() {
		return roleRepository.findAll();
	}

	@Override
	public Optional<Role> findById(Long id) {
		return roleRepository.findById(id);
	}

	@Override
	public Role save(Role role) {
		return roleRepository.save(role);
	}

	@Override
	public Role update(Role role) {
		return roleRepository.save(role);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			roleRepository.deleteById(id);
			jsonObject.put("message", "Role deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}
	
}
