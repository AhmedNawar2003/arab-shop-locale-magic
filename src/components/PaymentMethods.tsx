
import React from "react";
import { useTranslation } from "react-i18next";

const paymentIcons = [
  "https://cdn-icons-png.flaticon.com/512/196/196561.png", // Visa
  "https://cdn-icons-png.flaticon.com/512/196/196539.png", // MasterCard
  "https://cdn-icons-png.flaticon.com/512/196/196578.png", // PayPal
];
const PaymentMethods: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-5">{t("paymentMethods")}</h2>
      <div className="flex items-center justify-center gap-6 mb-8">
        {paymentIcons.map((icon, i) => (
          <img src={icon} alt="Payment" key={i} className="h-12" />
        ))}
      </div>
      <div className="bg-yellow-50 text-yellow-800 border border-yellow-300 p-4 rounded text-center">
        <b>⚠️ Security notice:</b> Never enter payment information unless using SSL (https). Always verify you are on the secure site!
      </div>
    </section>
  );
};
export default PaymentMethods;
