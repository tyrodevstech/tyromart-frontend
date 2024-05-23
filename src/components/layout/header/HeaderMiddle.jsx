import React, {useState} from "react";
import {
  TbShoppingBag,
  TbHeart,
  TbUser,
  TbSearch,
  TbMenu2,
} from "react-icons/tb";

import { IoIosArrowDown, IoIosArrowUp, IoIosCheckmark } from "react-icons/io";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import clsx from 'clsx'

const categories = [
  { id: 1, name: 'All Categories' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Women' },
  { id: 4, name: 'Men' },
]


const HeaderMiddle = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [query, setQuery] = useState('')

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((category) => {
          return category.name.toLowerCase().includes(query.toLowerCase())
        })


  return (
    <div className="header-middle-bar bg-white">
      <div className="container py-4 flex flex-row items-center justify-between gap-6">

        <div className="w-4/12 lg:w-2/12 flex md:flex-row items-center md:justify-start">
          <a href="" className="text-center">
            <img
              src="https://htmldemo.net/norda/norda/assets/images/logo/logo.png"
              alt="tyro-mart-logo"
            />
          </a>
        </div>

        <div className="search-bar w-7/12 font-rubik hidden lg:flex flex-row items-center justify-between gap-2 border border-primary">
            
            <Combobox value={selected} onChange={(value) => setSelected(value)}>
              <div className="relative">
                <ComboboxInput
                  className={clsx(
                    'w-full rounded-lg border-none px-3.5 text-sm text-black',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white'
                  )}
                  displayValue={(category) => category?.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxButton className="group absolute inset-y-0 right-0 pl-2">
                  <IoIosArrowDown className="size-4 fill-black/60 group-data-[hover]:fill-black" />
                </ComboboxButton>
              </div>
              
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <ComboboxOptions
                  anchor="top start"
                  className="bg-white absolute !top-[6.5rem] rounded-md shadow-md p-1 empty:hidden"
                >
                  {filteredCategories.map((category) => (
                    <ComboboxOption
                      key={category.id}
                      value={category}
                      className="group flex cursor-default items-center gap-2 rounded-md py-1.5 px-3 select-none data-[focus]:bg-gray-200"
                    >
                      <IoIosCheckmark className="invisible size-4 fill-black group-data-[selected]:visible" />
                      <div className="text-sm text-black">{category.name}</div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Transition>
            </Combobox>


            <span className="h-6 w-px bg-slate-300 "></span>

            <input
              type="search"
              name="search"
              placeholder="Search Products..."
              className="border-none outline-none w-full py-2"
            />
            <button className="text-gray-600 px-2 font-semibold">
              <TbSearch strokeWidth={1} className="text-2xl" />
            </button>
        </div>


        <div className="w-6/12 lg:w-3/12 flex items-center md:justify-end gap-4">
          <a href=""className="group">
            <TbUser strokeWidth={1.2} className="text-3xl lg:text-4xl group-hover:text-primary duration-400"/>
          </a>

          <a
            href=""
            className="group relative mt-[0.10rem]"
          >
            <TbHeart strokeWidth={1.2} className="text-3xl lg:text-4xl group-hover:text-primary duration-400"/>
            <span className="rounded-full w-4 h-4 lg:w-5 lg:h-5  absolute -right-1 -top-1 flex items-center justify-center text-white bg-primary font-rubik text-[10px] lg:text-[12px] group-hover:bg-black duration-400">
              05
            </span>
          </a>

          <a
            href=""
            className="group relative"
          >
            <TbShoppingBag strokeWidth={1.2} className="text-3xl lg:text-4xl group-hover:text-primary duration-400"/>
            <span className="rounded-full w-4 h-4 lg:w-5 lg:h-5 absolute -right-1 -top-1 flex items-center justify-center text-white bg-primary font-rubik text-[10px] lg:text-[12px] group-hover:bg-black duration-400">
              10
            </span>
          </a>

          <div className="hidden lg:block font-rubik font-semibold text-primary">
            <p className="text-[14px] text-base">$2,435.30</p>
          </div>

          <button className="lg:hidden">
            <TbMenu2 strokeWidth={2} className="ml-2 md:ml-0 text-3xl" />
          </button>
        </div>


      </div>
    </div>
  );
};

export default HeaderMiddle;
