import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/router";
import { Dialog, Transition, Fragment } from "@headlessui/react";

const clsx = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const LabelText = ({ label, text }) => {
    return (
        <div>
            <p className="text-slate-300 font-bold ">{label}</p>
            <p className="text-slate-800 font-medium text-lg">{text || "---"}</p>
        </div>
    );
};

export const Loading = () => {
    return (
        <div className="flex justify-center mt-2 min-w-[300px] min-h-[150px] relative">
            <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-[#298390] border-t-transparent absolute top-2/4"></div>

        </div>
    );
};

const AssetDetailsModal = (props) => {
    const { asPath } = useRouter();
    const [assetDetails, setAssetDetails] = React.useState(null);
    const [isAssetDetailsOpen, setIsAssetDetailsOpen] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const {
        name,
        location_object,
        serial_number,
        warranty_details,
        warranty_amc_end_of_validity,
        asset_type,
        asset_class,
        vendor_name,
        support_name,
        support_email,
        support_phone,
        is_working,
        status,
    } = assetDetails || {};

    React.useEffect(() => {
        if (!props.assetId) return;
        setIsLoading(true);
        setIsAssetDetailsOpen(true);
        fetch(`${props.state_api_url}/api/v1/public/asset_qr/${props.assetId}/`)
            .then((res) => res.json())
            .then((data) => {
                setAssetDetails(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Asset Not Found");
                console.log(err);
            });
    }, [props.assetId]);

    const origin =
        typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "";

    const pageURL = `${origin}${asPath}`;
    const isActive = status === "ACTIVE";

    return (
        <Transition
            appear
            show={isAssetDetailsOpen}
            as={Fragment}
            className="relative z-10"
        >
            <Dialog
                as="div"
                open={isAssetDetailsOpen}
                onClose={() => setIsAssetDetailsOpen(false)}
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center sm:p-4 text-center">
                        <Transition.Child
                            className="transform rounded-md bg-white p-2 sm:p-6 text-left align-middle shadow-xl"
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel>
                                {error ? (
                                    <p className="text-center text-md font-bold">{error}</p>
                                ) : isLoading ? (<>
                                    <div className="flex justify-center">
                                        <Loading />
                                    </div>
                                </>) : (
                                    <div className="sm:p-3 text-center min-w-full md:min-w-[300px] lg:min-w-[800px]">
                                        <section className="my-4">
                                            <div className="mx-auto px-4">
                                                <div className="border border-slate-300 bg-white rounded-2xl">
                                                    <h1 className="p-4 border-b border-slate-300 font-bold text-slate-700 ">
                                                        Asset Details{" "}
                                                        {serial_number && `(#${serial_number})`}
                                                    </h1>
                                                    <div className="flex flex-col gap-4 p-4 md:justify-evenly md:flex-row">
                                                        <div className="px-4">
                                                            <h1 className="text-2xl text-slate-800 font-bold">
                                                                {name}
                                                            </h1>
                                                            <div className="mt-2 mb-4 flex gap-2 justify-center">
                                                                {isActive && (
                                                                    <span
                                                                        className={clsx(
                                                                            "border text-sm font-bold px-2 py-1 rounded-md bg-opacity-50",
                                                                            isActive
                                                                                ? "text-green-800 bg-green-300 border-green-400 "
                                                                                : "text-yellow-800 border-yellow-400 bg-yellow-200"
                                                                        )}
                                                                    >
                                                                        {isActive
                                                                            ? "Active"
                                                                            : "Transfer In Progress"}
                                                                    </span>
                                                                )}
                                                                {is_working && (
                                                                    <span
                                                                        className={clsx(
                                                                            "border  bg-opacity-50 text-sm font-bold px-2 py-1 rounded-md",
                                                                            is_working
                                                                                ? "text-green-800 bg-green-300 border-green-400"
                                                                                : "border-red-300 bg-red-200 text-red-700 "
                                                                        )}
                                                                    >
                                                                        {is_working ? "Working" : "Not Working"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="flex gap-4 mt-4 flex-wrap justify-center">
                                                                <LabelText
                                                                    label="Type"
                                                                    text={asset_type}
                                                                />
                                                                <LabelText
                                                                    label="Class"
                                                                    text={asset_class}
                                                                />
                                                            </div>
                                                            <div className="flex gap-4 mt-4 flex-wrap justify-center">
                                                                <LabelText
                                                                    label="Location"
                                                                    text={location_object?.name}
                                                                />
                                                                <LabelText
                                                                    label="Facility"
                                                                    text={
                                                                        location_object?.facility.name ?? (
                                                                            <Loading />
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex my-auto justify-center md:justify-normal">
                                                            <div className="border-2 border-slate-300 p-4 rounded-xl bg-white">
                                                                <QRCodeSVG value={pageURL} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border border-slate-300 bg-whiterounded-2xl mt-4 rounded-2xl">
                                                    <h1 className="p-4 border-b border-slate-300 font-bold text-slate-700">
                                                        Warranty & Support
                                                    </h1>
                                                    <div className="p-4">
                                                        <LabelText
                                                            label="Vender Name"
                                                            text={vendor_name}
                                                        />
                                                        <div className="flex gap-8 my-4 flex-wrap justify-center">
                                                            <LabelText
                                                                label="Customer Support Name"
                                                                text={support_name}
                                                            />
                                                            <LabelText
                                                                label="Customer Support Phone"
                                                                text={<a href={`tel:${support_phone}`} className="text-blue-500">{support_phone}</a>}
                                                            />
                                                            <LabelText
                                                                label="Customer Support Email"
                                                                text={<a href={`mailto:${support_email}`} className="text-blue-500">{support_email}</a>}
                                                            />
                                                        </div>
                                                        <div className="flex gap-8 my-4 flex-wrap justify-center">
                                                            <LabelText
                                                                label="Warranty Details"
                                                                text={warranty_details}
                                                            />
                                                            <LabelText
                                                                label="Warranty/AMC end of validity "
                                                                text={
                                                                    warranty_amc_end_of_validity
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                <button
                                    type="button"
                                    className="mt-6 block rounded-md bg-[#298390] px-4 py-2 text-sm font-medium text-white hover:bg-[#39acbe] mr-0 ml-auto w-full sm:w-auto"
                                    onClick={() => {
                                        setIsAssetDetailsOpen(false);
                                    }}
                                >
                                    Close
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default AssetDetailsModal;
