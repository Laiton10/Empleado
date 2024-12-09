package Empresa;

import java.sql.SQLException;

public class Consola{
    public static void main(String[] args){
        try{
            DAOEmp midao = new DAOEmp();
            System.out.println(midao.getAllEmpleados());

            DAODpto midao2 = new DAODpto();
            System.out.println(midao2.getAllDepartamentos());

            DTOEmpl emp1= new DTOEmpl(16, "Jake", 25, 2);
           // midao.insertEmpleado(emp1);

            DTODpto dpto1= new DTODpto("Recursitos");

            System.out.println(midao2.getDepartamentobyId(3));


        }catch (SQLException e){
            e.printStackTrace();
        }

    }

}