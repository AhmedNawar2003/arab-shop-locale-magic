
import React from "react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

const WishlistPage: React.FC = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { t } = useTranslation();
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t("wishlist")}</h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">({t("wishlist")} فارغة)</p>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <Card key={item.id} className="flex items-center gap-4 p-4">
              <img src={item.image} alt={item.nameKey} className="h-16 w-16 rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.nameKey}</div>
                <div className="text-gray-500">${item.price}</div>
              </div>
              <button className="text-red-500" onClick={() => removeFromWishlist(item.id)}>
                حذف
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
