import apiClient from "../axiosConfig";

interface LoginResponse {
  data: {
    token: string;
    userEmail: string;
    userName: string;
  };
  errores: any[];
}

interface LoginRequest {
  userEmail: string;
  password: string;
}

export const loginService = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse>(
      "/api/Auth/login",
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};
