import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change to your server's API endpoint

// Fetching data functions
export const fetchCustomers = async () => {
  return await axios.get(`${API_URL}/customer`);
};

export const fetchDestinations = async () => {
  return await axios.get(`${API_URL}/destination`);
};

export const fetchPackages = async () => {
  return await axios.get(`${API_URL}/travel_package`);
};

export const fetchAgents = async () => {
  return await axios.get(`${API_URL}/travel_agent`);
};

// Insert data functions
export const insertCustomer = async (customer) => {
  return await axios.post(`${API_URL}/customer`, customer);
};

export const insertDestination = async (destination) => {
  return await axios.post(`${API_URL}/destination`, destination);
};

export const insertPackage = async (packageData) => {
  return await axios.post(`${API_URL}/travel_package`, packageData);
};

export const insertAgent = async (agent) => {
  return await axios.post(`${API_URL}/travel_agent`, agent);
};

// Update data functions
export const updateCustomer = async (customerId, customer) => {
  return await axios.put(`${API_URL}/customer/${customerId}`, customer);
};

export const updateDestination = async (destinationId, destination) => {
  return await axios.put(
    `${API_URL}/destination/${destinationId}`,
    destination
  );
};

export const updatePackage = async (packageId, packageData) => {
  return await axios.put(`${API_URL}/travel_package/${packageId}`, packageData);
};

export const updateAgent = async (agentId, agent) => {
  return await axios.put(`${API_URL}/travel_agent/${agentId}`, agent);
};

// Delete data functions
export const deleteCustomer = async (customerId) => {
  return await axios.delete(`${API_URL}/customer/${customerId}`);
};

export const deleteDestination = async (destinationId) => {
  return await axios.delete(`${API_URL}/destination/${destinationId}`);
};

export const deletePackage = async (packageId) => {
  return await axios.delete(`${API_URL}/travel_package/${packageId}`);
};

export const deleteAgent = async (agentId) => {
  return await axios.delete(`${API_URL}/travel_agent/${agentId}`);
};

// Additional functions
export const bookPackage = async (booking) => {
  return await axios.post(`${API_URL}/package_booking`, booking);
};

export const getDestinations = async () => {
  return await axios.get(`${API_URL}/destination`);
};

export const getPackages = async () => {
  return await axios.get(`${API_URL}/travel_package`);
};

export const getCustomers = async () => {
  return await axios.get(`${API_URL}/customer`);
};

export const getAgents = async () => {
  return await axios.get(`${API_URL}/travel_agent`);
};
