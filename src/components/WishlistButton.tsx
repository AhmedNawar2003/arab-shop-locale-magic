
import React from "react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useTranslation } from "react-i18next";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

type Props = { product: Product };

const WishlistButton: React.FC<Props> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { t } = useTranslation();

  if (isInWishlist(product.id)) {
    return (
      <Button variant="outline" onClick={() => removeFromWishlist(product.id)}>
        ❤️ {t("wishlist")}
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={() => addToWishlist(product)}>
      🤍 {t("addToWishlist")}
    </Button>
  );
};

export default WishlistButton;
