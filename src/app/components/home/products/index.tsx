"use client";
import Image from "next/image";
         import Link from "next/link";
import myDinelinkImage from "../../../../../public/images/mydinelink-product.png"
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";


function Products() {


  return (
            

        <section id="products" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12 lg:pb-28">
        <div className="max-w-xl">
           {/* 1. Heading (Visible only on Mobile, at the top) */}
          <h2 className="mb-10 text-5xl lg:hidden text-slate-900 dark:text-white">
                    Products
                  </h2>
 {/* 1. Heading (Visible only on web, at the top) */}
          <h2 className="mb-10 text-5xl hidden lg:block text-slate-900 dark:text-white">Products</h2>
          
          <h3 className="mx-auto">                     
                          <TextGenerateEffect words="Turn every table into a " />
                          <br/>
                          <TextGenerateEffect
                            words="self-ordering counter."
                     
                            className="italic font-normal instrument-font"
                          />                     
                      </h3>
          <p className="mt-7 max-w-lg text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">MyDineLink helps restaurants manage QR ordering, POS billing, kitchen operations, GST-ready bills, and sales reports — all in one simple, commission-free app.</p>
          {/* <a href="https://mydinelink.com" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 text-base font-semibold text-primary transition hover:gap-4">Explore more <span aria-hidden="true" className="text-xl">→</span></a> */}
 

<Link
  href="https://mydinelink.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-9 inline-flex items-center gap-3 text-base font-semibold text-primary transition-all duration-300 hover:gap-4"
>
  Explore more
  <span aria-hidden="true" className="text-xl">
    →
  </span>
</Link>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-card shadow-sm">
      <Image
        src={myDinelinkImage}
        alt="MyDineLink restaurant management dashboard with QR ordering and kitchen orders"
        className="h-full min-h-[360px] object-cover object-center sm:min-h-[460px]"
      />
    </div>
      </section>



           
         
       
  );
}

export default Products;
