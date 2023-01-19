import React from "react";

const NavbarAdmin = () => {

    return (
        <div class="navbaradmin-wrap">
            <div className="w-140 h-140 mt-minus-45 ml-40 mb-minus-55">
                <img
                    className="w-4 mr-3"
                    alt="logogram"
                    src="https://res.cloudinary.com/dcrd7eosb/image/upload/v1673322483/shop/bodimaji-logogram_dbqmgr.png"
                />
            </div>
            <div
                class="px-8 py-6 pt-0 pb-0 flex flex-row justify-between border-b border-black align-baseline font-inter font-normal font-normal text-white bg-#221177 shadow-xl w-950 h-25 ml-80 mt-minus-40"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <div class="flex font-medium text-black text-3xl leading-normal mt-minus-30 ml-40">
                    Bodimaji
                </div>

            </div>
        </div>
    );
};

export default NavbarAdmin;
