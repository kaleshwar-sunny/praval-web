"use client";

import Image from "next/image";

const quickLinks = [
  { id: "overview", label: "Bicep Language: Simplifying ARM Templates" },
  { id: "why", label: "Why Bicep Language?" },
  { id: "azureBenefits", label: "Benefits of Using Bicep for Azure Resource Deployment" },
  { id: "gettingStarted", label: "Getting Started with Bicep" },
  { id: "benefits", label: "Benefits of Bicep Language" },
  { id: "drawbacks", label: "Drawbacks of Bicep Language" },
  { id: "conclusion", label: "Conclusion" },
];

export default function BicepBlogPage() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[350px] md:h-[450px]">
        <Image
          src="/images/bicepBlogHero.png"
          alt="Blog Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
            <div>
            <p className="text-white text-base md:text-lg relative inline-block">
                Blogs
                <span className="block h-[3px] w-1/2 bg-[#0F72B1] mt-1"></span>
            </p>
            </div>

            <h1 className="text-white text-xl md:text-4xl font-bold mt-4 max-w-4xl">
            Overview of Bicep Language: The Easy Way to Automate Azure Resource Deployment​
            </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-10">

          {/* OVERVIEW */}
          <div id="overview" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bicep Language: Simplifying ARM Templates
            </h2>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              If you’ve ever worked with Azure Resource Manager (ARM) templates, you know how complex they can be. These templates are JSON files that define the infrastructure needed to deploy an Azure resource, and they can be difficult to read, write, and maintain. Enter Bicep, a new language developed by Microsoft that simplifies the process of creating ARM templates.
            </p>

            <p className="text-sm md:text-base text-gray-700">
              Bicep is an open-source Domain-Specific Language (DSL) that compiles into ARM templates. It uses a more human-readable syntax than JSON and provides built-in functions and types that simplify the creation of templates. Bicep code is designed to be easier to read, write, and maintain than ARM templates, making it an excellent choice for Infrastructure-as-Code (IaC) projects.
            </p>
          </div>

          {/* WHY */}
          <div id="why" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Bicep Language?
            </h2>

            <p className="text-sm md:text-base text-gray-700">
              The primary advantage of the Bicep is its simplicity. Bicep code is easier to read and understand than ARM templates, reducing the time required to develop and maintain IaC code.
            </p>
          </div>

          {/* AZURE BENEFITS */}
          <div id="azureBenefits" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Benefits of Using Bicep for Azure Resource Deployment
            </h2>

            <p className="text-sm md:text-base text-gray-700 mb-2">
              Businesses leverage AI chatbots for several key reasons:
            </p>

            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700">
              <li>
                <b>Readability:</b> Bicep is designed to be easy to read and understand. Its syntax is similar to other programming languages, and it uses indentation to define blocks of code. This makes it easier to read than JSON, which can be challenging to parse, especially for large templates.
              </li>

              <li>
                <b>Reusability:</b> Bicep code can be modularized, making it easier to reuse code blocks across multiple templates. This reduces the amount of code that needs to be written, leading to faster development times.
              </li>

              <li>
                <b>Built-in functions and types:</b> SBicep provide built-in functions and types that simplify the creation of templates. These functions and types help to reduce the complexity of the code, making it easier to write and maintain.
              </li>

              <li>
                <b>Integration with existing tools:</b> Bicep integrates with existing Azure tools, such as the Azure CLI and Azure PowerShell. This makes it easy to use Bicep within existing workflows and reduces the learning curve required to start using the language.
              </li>
            </ul>
          </div>

          {/* GETTING STARTED */}
          <div id="gettingStarted" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Getting Started with Bicep
            </h2>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              To get started with Bicep, you’ll need to install the Bicep CLI. This is a command-line tool that allows you to compile Bicep code into ARM templates. Once you’ve installed the CLI, you can start writing Bicep code.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              Here’s an example of Bicep code that deploys an Azure Storage account:
            </p>

            {/* CODE BLOCK */}
            <div className="bg-white shadow rounded-xl p-4 text-sm overflow-x-auto">
<pre>{`param storageAccountName string
param location string
resource mystorageaccount 'Microsoft.Storage/storageAccounts@2021-06-01' = {
  name: storageAccountName
  location: location
  sku: { name: 'Standard_LRS' }
  tier: 'Standard'
  kind: 'StorageV2'
}`}</pre>
            </div>

            <p className="text-sm md:text-base text-gray-700 mt-4 mb-4">
              This is an Azure Resource Manager (ARM) template code snippet that creates a storage account resource. In this example, we define a parameter for the storage account name, and then we create a storage account resource. The resource is defined using the Microsoft.Storage/storageAccounts resource type, and we specify the name, location, SKU, and kind of the storage account.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              To compile this code into an ARM template, you would run the following command:
            </p>

            {/* COMMAND BLOCK */}
            <div className="bg-white shadow rounded-xl p-4 text-sm">
              New-AzResourceGroupDeployment -TemplateFile main.bicep
            </div>

            <p className="text-sm md:text-base text-gray-700 mt-4">
              This would generate an ARM template called main.json, which could then be deployed using Azure CLI or another deployment tool. Bicep is a powerful domain-specific language (DSL) for deploying infrastructure to Microsoft Azure. While there are several advantages to using Bicep, there are also a few potential drawbacks to consider. Here are some of the pros and cons of using Bicep:
            </p>

            {/* IMAGE */}
            <div className="mt-6">
              <Image
                src="/images/bicepProsCons.png"
                alt="Bicep Pros and Cons"
                width={900}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* BENEFITS LANGUAGE */}
          <div id="benefits" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Benefits of Bicep Language:
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700">
              <li><b>Define Purpose:</b> Bicep provides a simpler and more intuitive syntax than JSON templates, which makes it easier to write and understand.</li>
              <li><b>Simplified Syntax:</b> Bicep supports modularization, which enables code reuse and helps to simplify the management of large-scale deployments.</li>
              <li><b>Type Checking:</b> Bicep includes built-in type checking, which helps to identify errors before deployment, and saves time on debugging.</li>
              <li><b>Readability:</b> Bicep code is more readable and maintainable than JSON templates, which makes it easier for developers to collaborate and maintain their codebase.</li>
              <li><b>Integration:</b> Bicep integrates well with popular development tools such as Visual Studio Code, which makes it easier to develop and maintain Bicep code.</li>
            </ul>
          </div>

          {/* DRAWBACKS */}
          <div id="drawbacks" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Drawbacks of Bicep Language:
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700">
              <li><b>Limited Ecosystem:</b> Bicep is a relatively new language, and its ecosystem is not as extensive as JSON templates. This may limit the availability of community resources such as forums, tutorials, and support.</li>
              <li><b>Learning Curve:</b> While Bicep’s syntax is simpler than JSON templates, it may still take some time to learn and master the language, especially for developers who are new to Azure.</li>
              <li><b>Limited Customization:</b> Bicep has some limitations on customization that may limit developers from achieving a few specific deployment scenarios.</li>
              <li><b>Syntax Limitation:</b> Some advanced scenarios that can be defined in JSON templates are not yet supported in Bicep.</li>
              <li><b>Platform-specific:</b> Bicep is specific to Microsoft Azure and can’t be used for other cloud providers.</li>
            </ul>
          </div>

          {/* CONCLUSION */}
          <div id="conclusion" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Conclusion:
            </h2>

            <p className="text-sm md:text-base text-gray-700">
              Azure Bicep is an exciting new language that simplifies the process of creating ARM templates. Its human-readable syntax and built-in functions and types make it easier to write, read, and maintain IaC code. If you’re currently using ARM templates for your Azure deployments, you should consider giving Bicep a try.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block">
          <div className="sticky top-20 border-l border-gray-300 pl-6">
            <h3 className="text-xl font-semibold mb-4">
              Content Quick Links
            </h3>

            <ul className="space-y-3 text-[#0F72B1] text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </div>
  );
}