"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Search,
  ShieldCheck,
  ArrowRight,
  Monitor,
  ShoppingBag,
  Layers,
  Sparkles,
  Gauge,
  Headphones,
  Hexagon,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  getOrganizationSchema,
  getServiceSchema,
  getBreadcrumbSchema,
} from "@/src/lib/schema";

// ============================================================================
// DATA STRUCTURES: WHY CHOOSE, SERVICES, PROCESS, TECH & METRICS
// ============================================================================

const WHY_CHOOSE_ITEMS = [
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Tailored websites and web applications that fit your unique business needs.",
    icon: Monitor,
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Perfect experience across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    id: "performance-focused",
    title: "Performance Focused",
    description: "Fast loading, optimized code and seamless user experience.",
    icon: Gauge,
  },
  {
    id: "seo-friendly",
    title: "SEO Friendly",
    description: "Clean structure and best practices to help you rank higher.",
    icon: Search,
  },
  {
    id: "secure-reliable",
    title: "Secure & Reliable",
    description: "Built with the latest security standards to keep your data safe.",
    icon: ShieldCheck,
  },
  {
    id: "ongoing-support",
    title: "Ongoing Support",
    description: "We're here even after launch to keep your site running smoothly.",
    icon: Headphones,
  },
];

const CORE_SERVICES = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Professional business websites that build trust and generate leads.",
    icon: Monitor,
    href: "/contact",
  },
  {
    id: "ecommerce-development",
    title: "E-commerce Development",
    description: "Feature-rich online stores that boost sales and deliver seamless shopping experiences.",
    icon: ShoppingBag,
    href: "/contact",
  },
  {
    id: "web-app-development",
    title: "Web Application Development",
    description: "Scalable and secure web apps for better workflow and productivity.",
    icon: Hexagon,
    href: "/contact",
  },
  {
    id: "cms-development",
    title: "CMS Development",
    description: "Easy-to-manage content platforms like WordPress, Drupal and more.",
    icon: Layers,
    href: "/contact",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understand goals, target audience & architecture.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Interactive wireframes and responsive UI prototypes.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Clean code execution and cross-device quality checks.",
  },
  {
    number: "04",
    title: "Launch & Deployment",
    description: "Seamless zero-downtime production deployment.",
  },
  {
    number: "05",
    title: "Support & Maintenance",
    description: "Continuous performance audits and proactive updates.",
  },
];

const TECH_STACK = [
  {
    name: "React",
    color: "#00D8FF",
    icon: (
      <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "NEXT.js",
    color: "#000000",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-foreground" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" /></svg>
    ),
  },
  {
    name: "node",
    color: "#5FA04E",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-foreground" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" /></svg>
    ),
  },
  {
    name: "php",
    color: "#777BB4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-foreground" viewBox="0 0 128 128"><path fill="url(#a)" d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z" /><path fill="#777bb3" d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z" /><path d="M34.772 67.864c2.793 0 4.877-.515 6.196-1.53 1.306-1.006 2.207-2.747 2.68-5.175.44-2.27.272-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.464l-2.473 12.732zM20.173 83.547a.694.694 0 0 1-.68-.828l6.557-33.738a.695.695 0 0 1 .68-.561h14.134c4.442 0 7.748 1.206 9.827 3.585 2.088 2.39 2.734 5.734 1.917 9.935-.333 1.711-.905 3.3-1.7 4.724a15.818 15.818 0 0 1-3.128 3.92c-1.531 1.432-3.264 2.472-5.147 3.083-1.852.604-4.232.91-7.07.91h-5.724l-1.634 8.408a.695.695 0 0 1-.682.562z" /><path fill="#fff" d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM30.301 68.557h4.471c2.963 0 5.17-.557 6.62-1.675 1.451-1.116 2.428-2.98 2.938-5.591.485-2.508.264-4.277-.665-5.308-.931-1.03-2.791-1.546-5.584-1.546h-5.036l-2.743 14.12m10.563-19.445c4.252 0 7.353 1.117 9.303 3.348 1.95 2.232 2.536 5.347 1.76 9.346-.322 1.648-.863 3.154-1.625 4.518-.764 1.366-1.76 2.614-2.991 3.747-1.468 1.373-3.097 2.352-4.892 2.935-1.794.584-4.08.875-6.857.875h-6.296l-1.743 8.97h-7.35l6.558-33.739h14.133" /><path d="M69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407z" /><path fill="#fff" d="M65.31 38.755h-7.291a1.39 1.39 0 0 0-1.364 1.124l-6.557 33.738a1.39 1.39 0 0 0 1.363 1.654h7.291a1.39 1.39 0 0 0 1.364-1.124l3.537-18.205h4.682c2.168 0 2.624.463 2.641.484.132.14.305.795.019 2.264l-2.9 14.927a1.39 1.39 0 0 0 1.364 1.654h7.408a1.39 1.39 0 0 0 1.363-1.124l3.051-15.7c.715-3.686.103-6.45-1.82-8.217-1.836-1.686-4.91-2.505-9.398-2.505h-4.81l1.421-7.315a1.39 1.39 0 0 0-1.364-1.655zm0 1.39-1.743 8.968h6.496c4.087 0 6.907.714 8.457 2.14 1.553 1.426 2.017 3.735 1.398 6.93l-3.052 15.699h-7.407l2.901-14.928c.33-1.698.208-2.856-.365-3.474-.573-.617-1.793-.926-3.658-.926h-5.829l-3.756 19.327H51.46l6.558-33.739h7.292z" /><path d="M92.136 67.864c2.793 0 4.878-.515 6.198-1.53 1.304-1.006 2.206-2.747 2.679-5.175.44-2.27.273-3.854-.5-4.71-.788-.874-2.493-1.317-5.067-1.317h-4.463l-2.475 12.732zM77.54 83.547a.694.694 0 0 1-.682-.828l6.557-33.738a.695.695 0 0 1 .682-.561H98.23c4.442 0 7.748 1.206 9.826 3.585 2.089 2.39 2.734 5.734 1.917 9.935a15.878 15.878 0 0 1-1.699 4.724 15.838 15.838 0 0 1-3.128 3.92c-1.53 1.432-3.265 2.472-5.147 3.083-1.852.604-4.232.91-7.071.91h-5.723l-1.633 8.408a.695.695 0 0 1-.683.562z" /><path fill="#fff" d="M91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823zM87.666 68.557h4.47c2.964 0 5.17-.557 6.622-1.675 1.45-1.116 2.428-2.98 2.936-5.591.487-2.508.266-4.277-.665-5.308-.93-1.03-2.791-1.546-5.583-1.546h-5.035Zm10.563-19.445c4.251 0 7.354 1.117 9.303 3.348 1.95 2.232 2.537 5.347 1.759 9.346-.32 1.648-.862 3.154-1.624 4.518-.763 1.366-1.76 2.614-2.992 3.747-1.467 1.373-3.097 2.352-4.892 2.935-1.793.584-4.078.875-6.856.875h-6.295l-1.745 8.97h-7.35l6.558-33.739h14.133" /><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)" gradientUnits="userSpaceOnUse"><stop stop-color="#AEB2D5" /><stop offset=".3" stop-color="#AEB2D5" /><stop offset=".75" stop-color="#484C89" /><stop offset="1" stop-color="#484C89" /></radialGradient></defs></svg>


    ),
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-foreground" viewBox="0 0 50 52"><title>Logomark</title><path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" fill="#FF2D20" fillRule="evenodd" /></svg>
    ),
  },
  {
    name: "WordPress",
    color: "#21759B",
    icon: (
      <svg className="w-8 h-8 fill-current text-foreground" viewBox="0 0 122.52 122.523" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" /><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" /><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" /><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" /><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" /></g></svg>
    ),
  },
  {
    name: "Shopify",
    color: "#96BF48",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 512 512"><path d="M425.9 98.7c-.3-2.7-2.7-3.9-4.5-4.2s-38.1-.6-38.1-.6-30.6-29.7-33.6-32.7-8.8-2.1-11.2-1.5c0 0-5.8 1.8-15.4 4.8-1.5-5.1-3.9-11.5-7.3-17.9-10.9-20.9-26.6-31.8-46-31.8-1.2 0-2.7 0-3.9.3-.6-.6-1.2-1.2-1.8-2.1-8.7-9-19.3-13.3-32-13-24.8.6-49.4 18.5-69.6 50.6-14.2 22.4-24.8 50.6-27.9 72.4-28.5 8.8-48.4 14.8-48.7 15.1-14.2 4.5-14.8 4.8-16.7 18.5-1.5 10-39.1 301-39.1 301L345.3 512l136.5-33.9c.1 0-55.6-377-55.9-379.4M307.2 69.3c-7.3 2.1-15.4 4.8-24.5 7.6-.3-12.4-1.8-30-7.6-45.1 19 3.6 28.1 24.8 32.1 37.5m-40.9 12.8c-16.7 5.1-34.5 10.6-52.7 16.3 5.1-19.4 14.8-38.8 26.6-51.5 4.5-4.8 10.6-10 17.9-13 7 14.3 8.2 34.5 8.2 48.2m-33.9-65.4c5.8 0 10.6 1.2 14.8 3.9-6.7 3.3-13.3 8.5-19.4 15.1-15.7 17-27.9 43-32.7 68.4-15.1 4.5-29.7 9.1-43.3 13.3 9.1-39.9 42.4-99.5 80.6-100.7" fill="#95bf47" /><path d="M421.3 94.5c-1.8-.3-38.1-.6-38.1-.6s-30.6-29.7-33.6-32.7c-1.2-1.2-2.7-1.8-4.2-1.8V512l136.5-33.9s-55.7-376.6-56-379.4c-.7-2.7-2.8-3.9-4.6-4.2" fill="#5e8e3e" /><path d="M269.6 164.7 253.9 224s-17.6-8.2-38.8-6.7c-30.9 1.8-31.2 21.2-30.9 26.3 1.8 26.6 71.5 32.4 75.4 94.5 3 49-26 82.4-67.8 85.1-50.3 3-77.8-26.3-77.8-26.3l10.6-45.1s27.9 20.9 50 19.7c14.5-.9 19.7-12.7 19.1-21.2-2.1-34.5-59-32.7-62.7-89.3-3-47.8 28.5-96.3 97.8-100.8 27.2-2.4 40.8 4.5 40.8 4.5" fill="#fff" /></svg>
    ),
  },
];

const WEB_DEV_FAQS = [
  {
    question: "What technologies do you use for custom web development?",
    answer:
      "We build modern, scalable web applications primarily using Next.js, React, TypeScript, Node.js, and Tailwind CSS. For content management, we develop custom WordPress and headless CMS solutions. For e-commerce, we engineer custom Shopify storefronts and scalable commerce engines tailored to your transaction volume.",
  },
  {
    question: "How long does it take to design and develop a custom website?",
    answer:
      "Timelines vary depending on project complexity. Standard corporate websites typically take 3 to 6 weeks from strategy and UI/UX design to deployment. Custom web applications, enterprise platforms, and complex e-commerce portals with custom database architectures and third-party API integrations generally take 8 to 14 weeks.",
  },
  {
    question: "Will my website be mobile-responsive and optimized for SEO?",
    answer:
      "Yes. Every website we engineer is mobile-first, fully responsive across all device breakpoints, and built with technical SEO best practices from day one. This includes semantic HTML5 structure, schema markup (JSON-LD), optimized Core Web Vitals, ultra-fast load times, and dynamic sitemaps for maximum search engine crawlability.",
  },
  {
    question: "Do you provide website maintenance and security support after launch?",
    answer:
      "Yes. We offer proactive maintenance and security packages that include continuous uptime monitoring, regular security patches, framework and dependency updates, automated daily backups, and ongoing performance tuning to keep your web platform secure and running smoothly.",
  },
  {
    question: "Can you redesign or improve our existing website without starting from scratch?",
    answer:
      "Yes. We frequently conduct code and performance audits on existing websites to identify bottlenecks, modernize user interfaces, upgrade outdated technology stacks, and improve conversion funnels without requiring a full rebuild from zero when legacy systems need to be preserved.",
  },
  {
    question: "How do you handle website hosting, domains, and deployment?",
    answer:
      "We configure modern cloud deployment pipelines on platforms such as Vercel, AWS, Google Cloud, or your preferred hosting environment. We assist with DNS configuration, SSL certification, CDN setup, and automated CI/CD deployment pipelines so future updates deploy seamlessly.",
  },
];

export default function WebDevelopmentPage() {
  const organizationSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({
    name: "Custom Web Development Services & Web Applications",
    description:
      "We build fast, secure and scalable websites that help your brand stand out, engage users and drive real business growth. Custom web development, Next.js, React, and ecommerce solutions.",
    url: "/services/web-development",
    serviceType: "WebDevelopmentServices",
    image: "/images/services/web-development/web-dev-hero.jpg",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Web Development", url: "/services/web-development" },
  ]);

  return (
    <div className="bg-background text-foreground transition-colors overflow-hidden">
      {/* Structured Data Scripts for Google Crawling & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* =================================================================== */}
      {/* 1. HERO SECTION (Custom Web Development Solutions for Your Business) */}
      {/* =================================================================== */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-background relative overflow-hidden">
        {/* Ambient Glow Accents */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="absolute -top-36 -right-36 w-96 h-96 bg-brand-bright/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: "Services", url: "/services" },
                { name: "Web Development", url: "/services/web-development" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Copy, 4 Pills & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.14]">
                Custom Web Development <br />
                <span className="bg-gradient-to-r from-brand-electric via-blue-600 to-brand-bright bg-clip-text text-transparent">
                  Solutions for Your Business
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                We build fast, secure and scalable websites that help your brand stand out, engage users and drive real business growth. From simple business sites to complex web applications, our team creates web solutions tailored to your goals.
              </p>

              {/* 4 Feature Pills */}
              <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Code2 className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Modern Technologies</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Smartphone className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Responsive Design</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <Search className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>SEO Friendly Structure</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-foreground">
                  <ShieldCheck className="w-4 h-4 text-brand-bright shrink-0" />
                  <span>Ongoing Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="web_hero_start_project"
                  trackingLocation="web_development_hero"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md"
                >
                  Start Your Project
                </Button>
                <Button
                  href="/portfolio"
                  variant="outline"
                  size="md"
                  trackingName="web_hero_view_work"
                  trackingLocation="web_development_hero"
                  className="w-full sm:w-auto border-brand-bright text-brand-bright hover:bg-brand-bright/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Visual with 2 Floating Feature Overlays */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Decorative Dashed Arc Accent */}
              <div
                className="absolute -top-6 -left-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[3px] border-brand-bright/30 border-dashed pointer-events-none -z-0"
                aria-hidden="true"
              />

              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] sm:aspect-[16/12] z-10 group">
                <Image
                  src="/images/services/web-development/web-dev-hero.jpg"
                  alt="Senior software engineer developing custom web applications with dual monitors at workstation"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Card 1: Clean Code / Better Performance (Top-Left Overlay) */}
                <div className="absolute top-5 left-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 pr-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Clean Code
                    </span>
                    <span className="text-[10px] text-muted block leading-tight">
                      Better Performance
                    </span>
                  </div>
                </div>

                {/* Floating Card 2: Fast & Secure / Web Applications (Bottom-Right Overlay) */}
                <div className="absolute bottom-5 right-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 pr-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-bright shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-foreground block leading-tight">
                      Fast &amp; Secure
                    </span>
                    <span className="text-[10px] text-muted block leading-tight">
                      Web Applications
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. WHY CHOOSE OUR WEB DEVELOPMENT SERVICES? (6 Feature Cards)        */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle/50 border-t border-border-subtle/60" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                Web Development Services?
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
              We combine creativity, modern engineering and conversion strategy to deliver websites that are not only beautiful but also perform. Our focus is on your business goals, user experience and long-term success.
            </p>
          </div>

          {/* 6 Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:shadow-lg hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-start text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-bright mb-4 group-hover:scale-105 transition-transform">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-bright transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. OUR WEB DEVELOPMENT SERVICES (4 Core Service Cards)              */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-background border-t border-border-subtle/60" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                Web Development Services
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
              From concept to deployment, we offer end-to-end web development services to help you build a strong online presence and achieve your business goals.
            </p>
          </div>

          {/* 4 Cards Grid (4 Cols on lg, 2 on md, 1 on sm) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Circle Icon Top */}
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-bright mb-5 group-hover:scale-110 transition-transform">
                      <SrvIcon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-bright transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-bright hover:text-brand-electric group/link transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. OUR PROCESS (A Simple and Transparent Development Process)        */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-24 bg-surface-subtle/50 border-t border-border-subtle/60" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle, 5-Step Stepper & CTA */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-bright">
                  OUR PROCESS
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
                  A Simple and Transparent <br className="hidden sm:inline" />
                  Development Process
                </h2>
                <p className="mt-3 text-xs sm:text-sm md:text-base text-muted leading-relaxed max-w-xl">
                  We follow a clear and collaborative process to ensure your project is delivered on time, on budget and beyond expectations.
                </p>
              </div>

              {/* 5-Step Horizontal Stepper with Connected Nodes */}
              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
                  {PROCESS_STEPS.map((step, idx) => (
                    <div key={step.number} className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-brand-cyan/15 text-brand-bright font-bold font-mono text-xs sm:text-sm flex items-center justify-center shrink-0 border border-brand-cyan/35">
                          {step.number}
                        </div>
                        {idx < PROCESS_STEPS.length - 1 && (
                          <div className="hidden sm:block flex-1 h-[2px] bg-border-subtle" />
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight pt-1">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  trackingName="web_process_build_together"
                  trackingLocation="web_development_process"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Let&apos;s Build Together
                </Button>
              </div>
            </div>

            {/* Right Column: Clean Workspace Photo with Floating Glass Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-elevated aspect-[4/3] group">
                <Image
                  src="/images/services/web-development/web-dev-process-workspace.jpg"
                  alt="Modern web design workstation with laptop, smartphone and developer workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating Glass Overlay (Top-Right): Your Vision / Our Code / Real Results */}
                <div className="absolute top-5 right-5 bg-brand-electric/95 text-white backdrop-blur-md rounded-2xl p-3 sm:p-3.5 pr-4 shadow-xl border border-white/20 flex items-center gap-3 z-20">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-medium text-white/90 block leading-tight">
                      Your Vision
                    </span>
                    <span className="text-xs font-bold text-white block leading-tight">
                      Our Code
                    </span>
                    <span className="text-[10px] text-cyan-200 block leading-tight">
                      Real Results &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. TECHNOLOGIES WE WORK WITH (8 Brand Badges Row)                    */}
      {/* =================================================================== */}
      <section className="py-16 sm:py-20 bg-background border-t border-border-subtle/60" id="technologies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Technologies{" "}
              <span className="bg-gradient-to-r from-brand-electric to-brand-bright bg-clip-text text-transparent">
                We Work With
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              We use modern and reliable technologies to build high-performance web solutions.
            </p>
          </div>

          {/* 8 Logos Row (Flex wrap / grid with elegant brand styling) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-5 items-center justify-center">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-border-subtle bg-surface-elevated flex flex-col items-center justify-center text-center shadow-xs hover:border-brand-bright/40 hover:shadow-md transition-all group"
              >
                <div className="mb-2 shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs font-bold text-foreground block">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (Standard FaqSection Component)       */}
      {/* =================================================================== */}
      <FaqSection
        faqs={WEB_DEV_FAQS}
        title="Frequently Asked"
        highlightText="Questions"
        description="Clear, technically grounded answers regarding our custom web development services, frameworks, delivery timelines, and ongoing maintenance."
        variant="white"
      />
    </div>
  );
}
