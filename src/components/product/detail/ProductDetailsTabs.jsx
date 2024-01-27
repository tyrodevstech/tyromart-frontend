import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetailsTabs = ({ product }) => {
  return (
    <div>
      {/* Tabs component for description and review */}
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          {product.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat nihil ducimus pariatur officiis, autem
          aperiam totam eius vero aliquid odio dicta illum enim rem magnam
          mollitia, sit ea quas nemo vitae alias in? Aspernatur nihil molestias
          rerum iusto veniam? Ad quia molestias molestiae voluptate amet, optio
          totam! Illum, debitis vitae?
        </TabsContent>
        <TabsContent value="review">0 review.</TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTabs;
