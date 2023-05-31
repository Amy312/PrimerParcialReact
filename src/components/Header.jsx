import { useEffect, useState } from "react";

export const Header = ({ totalR, totalA}) => {
  
  return (
    <>
      <div className="flex flex-row bg-emerald-700 justify-center w-full align-baseline">
        <h1 className="text-3xl font-bold text-gray-100 align-middle justify-center p-5">
          ChatApp
        </h1>

        <div className="text-3xl font-normal text-gray-100 align-middle justify-center p-5">
          Total palabras de Rojo: {totalR}
        </div>

        <div className="text-3xl font-normal text-gray-100 align-middle justify-center p-5">
          Total palabras de Azul: {totalA}
        </div>
      </div>
    </>
  );
};
