import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Database, Users, ShoppingCart, DollarSign, Factory, Truck, BarChart3, Settings, Cloud, Shield, Zap, Globe } from "lucide-react";

const sapModules = [
  {
    icon: DollarSign,
    title: "SAP S/4HANA Finance",
    shortName: "FI/CO",
    description: "Comprehensive financial management including general ledger, accounts payable/receivable, asset accounting, and controlling.",
    features: [
      "General Ledger Accounting",
      "Accounts Payable & Receivable",
      "Asset Accounting",
      "Cost Center Accounting",
      "Profit Center Accounting",
      "Financial Planning & Analysis"
    ],
    benefits: "Real-time financial insights, automated closing processes, and unified financial operations."
  },
  {
    icon: ShoppingCart,
    title: "SAP MM (Materials Management)",
    shortName: "MM",
    description: "End-to-end procurement and inventory management covering purchasing, vendor management, and material planning.",
    features: [
      "Purchase Requisitions & Orders",
      "Vendor Evaluation & Management",
      "Inventory Management",
      "Invoice Verification",
      "Material Requirements Planning",
      "Warehouse Management Integration"
    ],
    benefits: "Optimized procurement costs, improved supplier relationships, and streamlined inventory control."
  },
  {
    icon: Factory,
    title: "SAP PP (Production Planning)",
    shortName: "PP",
    description: "Complete production planning and control for manufacturing operations including demand planning and shop floor control.",
    features: [
      "Demand Management",
      "Master Production Scheduling",
      "Material Requirements Planning",
      "Capacity Planning",
      "Shop Floor Control",
      "Production Orders Management"
    ],
    benefits: "Enhanced production efficiency, reduced lead times, and optimal resource utilization."
  },
  {
    icon: Truck,
    title: "SAP SD (Sales & Distribution)",
    shortName: "SD",
    description: "Comprehensive sales and distribution processes from order to cash including pricing, shipping, and billing.",
    features: [
      "Sales Order Processing",
      "Pricing & Conditions",
      "Delivery & Shipping",
      "Billing & Invoicing",
      "Credit Management",
      "Sales Analytics & Reporting"
    ],
    benefits: "Accelerated order-to-cash cycles, improved customer satisfaction, and accurate revenue recognition."
  },
  {
    icon: Users,
    title: "SAP HCM/SuccessFactors",
    shortName: "HCM",
    description: "Complete human capital management covering recruitment, payroll, performance, and talent management.",
    features: [
      "Recruitment & Onboarding",
      "Payroll Processing",
      "Time Management",
      "Performance Management",
      "Learning & Development",
      "Succession Planning"
    ],
    benefits: "Engaged workforce, streamlined HR processes, and data-driven talent decisions."
  },
  {
    icon: Database,
    title: "SAP EWM (Extended Warehouse)",
    shortName: "EWM",
    description: "Advanced warehouse management for complex logistics operations with real-time inventory visibility.",
    features: [
      "Inbound & Outbound Processing",
      "Warehouse Task Management",
      "Physical Inventory",
      "Labor Management",
      "Yard Management",
      "Cross-Docking"
    ],
    benefits: "Maximized warehouse efficiency, reduced errors, and optimized storage utilization."
  },
  {
    icon: BarChart3,
    title: "SAP BW/4HANA",
    shortName: "BW",
    description: "Enterprise data warehousing and business intelligence for advanced analytics and reporting.",
    features: [
      "Data Extraction & Loading",
      "Data Modeling",
      "Query & Reporting",
      "Data Mining",
      "Predictive Analytics",
      "Real-time Analytics"
    ],
    benefits: "Actionable insights, improved decision-making, and unified enterprise reporting."
  },
  {
    icon: Cloud,
    title: "SAP CPI (Cloud Integration)",
    shortName: "CPI",
    description: "Cloud-based integration platform connecting SAP and non-SAP applications with pre-built connectors.",
    features: [
      "Pre-built Integrations",
      "API Management",
      "B2B Integration",
      "IoT Integration",
      "Event-Driven Architecture",
      "Monitoring & Alerting"
    ],
    benefits: "Seamless connectivity, reduced integration complexity, and accelerated time-to-value."
  },
  {
    icon: Globe,
    title: "SAP Ariba",
    shortName: "Ariba",
    description: "Cloud-based procurement and supply chain solutions connecting buyers and suppliers globally.",
    features: [
      "Source-to-Pay",
      "Supplier Management",
      "Contract Management",
      "Procurement Analytics",
      "Supply Chain Collaboration",
      "Invoice Management"
    ],
    benefits: "Reduced procurement costs, improved compliance, and enhanced supplier collaboration."
  },
  {
    icon: Settings,
    title: "SAP BTP (Business Technology Platform)",
    shortName: "BTP",
    description: "Unified platform for application development, integration, data management, and analytics.",
    features: [
      "Application Development",
      "Extension Suite",
      "Integration Suite",
      "Data & Analytics",
      "AI & Machine Learning",
      "Automation"
    ],
    benefits: "Accelerated innovation, unified platform experience, and intelligent enterprise capabilities."
  },
  {
    icon: Shield,
    title: "SAP GRC (Governance, Risk, Compliance)",
    shortName: "GRC",
    description: "Comprehensive governance, risk management, and compliance solutions for enterprise security.",
    features: [
      "Access Control",
      "Process Control",
      "Risk Management",
      "Audit Management",
      "Fraud Management",
      "Regulatory Change Management"
    ],
    benefits: "Reduced compliance costs, minimized risks, and streamlined audit processes."
  },
  {
    icon: Zap,
    title: "SAP Concur",
    shortName: "Concur",
    description: "Travel, expense, and invoice management solutions for complete spend visibility and control.",
    features: [
      "Travel Booking",
      "Expense Management",
      "Invoice Processing",
      "Spend Analysis",
      "Policy Compliance",
      "Mobile Expense Capture"
    ],
    benefits: "Controlled travel spend, automated expense processing, and improved policy compliance."
  }
];

const SAPModules = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              SAP Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Comprehensive SAP Solutions
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert implementation, integration, and support across the complete SAP ecosystem. 
              Transform your enterprise with our certified SAP professionals.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "25+", label: "SAP Certified Experts" },
              { value: "200+", label: "SAP Projects Delivered" },
              { value: "12+", label: "SAP Modules Covered" },
              { value: "15+", label: "Years SAP Experience" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SAP Modules Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SAP Modules We Specialize In</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Complete coverage of SAP solutions for every aspect of your enterprise operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sapModules.map((module, index) => (
              <motion.div
                key={module.shortName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-medium">{module.shortName}</span>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {module.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-sm text-blue-400">
                    <span className="text-slate-500">Benefits:</span> {module.benefits}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our SAP Services */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our SAP Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              End-to-end SAP services from implementation to optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Implementation", desc: "New SAP deployments and greenfield implementations" },
              { title: "Migration", desc: "Seamless migration to S/4HANA and cloud solutions" },
              { title: "Integration", desc: "Connect SAP with your existing systems" },
              { title: "Support", desc: "24/7 managed services and ongoing support" },
              { title: "Optimization", desc: "Performance tuning and process improvement" },
              { title: "Training", desc: "End-user and admin training programs" },
              { title: "Consulting", desc: "Strategic advisory and roadmap planning" },
              { title: "Development", desc: "Custom ABAP and Fiori development" }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for SAP */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Trusted SAP Partner
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                With over 15 years of SAP experience and a team of 25+ certified consultants, 
                we deliver SAP solutions that drive real business value.
              </p>
              <div className="space-y-4">
                {[
                  "SAP Gold Partner with proven track record",
                  "Certified consultants across all major modules",
                  "Industry-specific solution templates",
                  "24/7 support and managed services",
                  "Agile implementation methodology",
                  "Fixed-price and outcome-based engagements"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Manufacturing",
                  "Retail & CPG",
                  "Healthcare",
                  "Financial Services",
                  "Energy & Utilities",
                  "Logistics",
                  "Automotive",
                  "Life Sciences"
                ].map((industry) => (
                  <div key={industry} className="px-4 py-3 bg-slate-800/50 rounded-lg text-center text-slate-300 text-sm">
                    {industry}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with SAP?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help you maximize your SAP investment and achieve your business goals.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors">
              Schedule SAP Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SAPModules;
