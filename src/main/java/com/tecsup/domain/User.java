package com.tecsup.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;
	@NotNull
	private String name;
	@NotNull
	private String email;
	@NotNull
	private String phone;
	@NotNull
	private String password;
	
	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
	
	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role=role;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
