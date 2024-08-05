import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Docs, ErrorPage, GettingStartedPage } from "../pages";
import {
  AlphabeticPagerPage,
  BreadcrumbPage,
  ButtonPage,
  CartActionBarPage,
  CheckboxPage,
  ColorsPage,
  DialogPage,
  DividerPage,
  DropdownPage,
  FilterPage,
  InputPage,
  LinkPage,
  ModalPage,
  RadioPage,
  ShadowsPage,
  SpacingPage,
  SpinnerPage,
  TabsPage,
  TogglePage,
  TypographyPage,
} from "../pages/componentsDocs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/docs",
    element: <Docs />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GettingStartedPage />,
      },
      {
        path: "/docs/alphabetic-pager",
        element: <AlphabeticPagerPage />,
      },
      {
        path: "/docs/breadcrumb",
        element: <BreadcrumbPage />,
      },
      {
        path: "/docs/button",
        element: <ButtonPage />,
      },
      {
        path: "/docs/cart-action-bar",
        element: <CartActionBarPage />,
      },
      {
        path: "/docs/checkbox",
        element: <CheckboxPage />,
      },
      {
        path: "/docs/colors",
        element: <ColorsPage />,
      },
      {
        path: "/docs/dialog",
        element: <DialogPage />,
      },
      {
        path: "/docs/divider",
        element: <DividerPage />,
      },
      {
        path: "/docs/dropdown",
        element: <DropdownPage />,
      },
      {
        path: "/docs/filter",
        element: <FilterPage />,
      },
      {
        path: "/docs/input",
        element: <InputPage />,
      },
      {
        path: "/docs/link",
        element: <LinkPage />,
      },
      {
        path: "/docs/modal",
        element: <ModalPage />,
      },
      {
        path: "/docs/radio",
        element: <RadioPage />,
      },
      {
        path: "/docs/shadows",
        element: <ShadowsPage />,
      },
      {
        path: "/docs/spacing",
        element: <SpacingPage />,
      },
      {
        path: "/docs/spinner",
        element: <SpinnerPage />,
      },
      {
        path: "/docs/tabs",
        element: <TabsPage />,
      },
      {
        path: "/docs/toggle",
        element: <TogglePage />,
      },
      {
        path: "/docs/typography",
        element: <TypographyPage />,
      },
    ],
  },
]);

export default router;
