"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    X,
    FileText,
    Users,
    Settings,
    BarChart,
    ChevronDown,
    Plus,
    Search,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [addOrderWindow, setAddOrderWindow] = useState<Window | null>(null);

    const openModal = (modalName: string) => {
        const width = window.screen.width * 0.85;
        const height = window.screen.height * 0.85;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        const newWindow = window.open(
            "/" + modalName,
            modalName,
            `width=${width},height=${height},left=${left},top=${top}`
        );
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const openAddOrderWindow = () => {
        const width = 600;
        const height = 400;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        const newWindow = window.open(
            "",
            "Add New Order",
            `width=${width},height=${height},left=${left},top=${top}`
        );
        if (newWindow) {
            newWindow.document.write(`
        <html>
          <head>
            <title>Add New Order</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 20px;
              }
              h1 {
                margin-top: 0;
                color: #003c74;
              }
              label {
                display: block;
                margin-top: 10px;
              }
              input, select {
                width: 100%;
                padding: 5px;
                margin-top: 5px;
              }
              button {
                margin-top: 20px;
                padding: 10px;
                background-color: #003c74;
                color: white;
                border: none;
                cursor: pointer;
              }
              button:hover {
                background-color: #00295c;
              }
            </style>
          </head>
          <body>
            <h1>Add New Order</h1>
            <form>
              <label for="client">Client:</label>
              <select id="client" required>
                <option value="">Select a client</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Smith</option>
              </select>
              
              <label for="date">Date:</label>
              <input type="date" id="date" required>
              
              <label for="status">Status:</label>
              <select id="status" required>
                <option value="">Select status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              
              <label for="total">Total:</label>
              <input type="number" id="total" placeholder="Enter total amount" required>
              
              <label for="description">Description:</label>
              <input type="text" id="description" placeholder="Enter order description">
              
              <button type="submit">Add Order</button>
            </form>
            <script>
              document.querySelector('form').addEventListener('submit', (e) => {
                e.preventDefault();
                // Here you would typically send the form data to your server
                alert('Order added successfully!');
                window.close();
              });
            </script>
          </body>
        </html>
      `);
            setAddOrderWindow(newWindow);
        }
    };

    useEffect(() => {
        return () => {
            if (addOrderWindow) {
                addOrderWindow.close();
            }
        };
    }, [addOrderWindow]);

    // Mock data for orders
    const orders = [
        {
            id: "ORD-001",
            client: "John Doe",
            date: "2023-05-15",
            status: "In Progress",
            total: "$500",
        },
        {
            id: "ORD-002",
            client: "Jane Smith",
            date: "2023-05-16",
            status: "Completed",
            total: "$750",
        },
        {
            id: "ORD-003",
            client: "Bob Johnson",
            date: "2023-05-17",
            status: "Pending",
            total: "$1000",
        },
        {
            id: "ORD-004",
            client: "Alice Brown",
            date: "2023-05-18",
            status: "In Progress",
            total: "$250",
        },
        {
            id: "ORD-005",
            client: "Charlie Davis",
            date: "2023-05-19",
            status: "Completed",
            total: "$1500",
        },
    ];

    // Mock data for clients
    const clients = [
        {
            id: "CLT-001",
            name: "John Doe",
            email: "john@example.com",
            phone: "123-456-7890",
            address: "123 Main St",
        },
        {
            id: "CLT-002",
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "234-567-8901",
            address: "456 Elm St",
        },
        {
            id: "CLT-003",
            name: "Bob Johnson",
            email: "bob@example.com",
            phone: "345-678-9012",
            address: "789 Oak St",
        },
        {
            id: "CLT-004",
            name: "Alice Brown",
            email: "alice@example.com",
            phone: "456-789-0123",
            address: "321 Pine St",
        },
        {
            id: "CLT-005",
            name: "Charlie Davis",
            email: "charlie@example.com",
            phone: "567-890-1234",
            address: "654 Maple St",
        },
    ];

    return (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-[#f0f0f0] font-sans text-black">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#a9c8e9] to-[#2b5797] p-1">
                <div className="ml-2 font-semibold text-white">
                    Gcoupe - Système de Gestion d'Atelier
                </div>
                <div className="flex">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-red-600">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Menu Bar */}
            <div className="flex border-b border-[#d9d9d9] bg-[#f0f0f0] p-1">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-3 py-1 text-sm font-normal hover:bg-[#d9d9d9]"
                        >
                            Fichier
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-[#d9d9d9] bg-[#f0f0f0]">
                        <DropdownMenuItem onClick={openAddOrderWindow}>New Order</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("New Client")}>
                            New Client
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => console.log("Exit")}>
                            Exit
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-3 py-1 text-sm font-normal hover:bg-[#d9d9d9]"
                        >
                            Édition
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-[#d9d9d9] bg-[#f0f0f0]">
                        <DropdownMenuItem onClick={() => console.log("Cut")}>Cut</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("Copy")}>
                            Copy
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("Paste")}>
                            Paste
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-3 py-1 text-sm font-normal hover:bg-[#d9d9d9]"
                        >
                            Affichage
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-[#d9d9d9] bg-[#f0f0f0]">
                        <DropdownMenuItem onClick={() => openModal("orders")}>
                            Orders
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openModal("clients")}>
                            Clients
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("Reports")}>
                            Reports
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-3 py-1 text-sm font-normal hover:bg-[#d9d9d9]"
                        >
                            Outils
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-[#d9d9d9] bg-[#f0f0f0]">
                        <DropdownMenuItem onClick={() => openModal("settings")}>
                            Settings
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-3 py-1 text-sm font-normal hover:bg-[#d9d9d9]"
                        >
                            Aide
                            <ChevronDown className="ml-1 h-3 w-3" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-[#d9d9d9] bg-[#f0f0f0]">
                        <DropdownMenuItem onClick={() => console.log("About")}>
                            About
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto bg-[#f0f0f0] p-6">
                <h1 className="mb-8 text-3xl font-semibold">Tableau de Bord</h1>

                {/* Stats Cards */}
                <div className="mb-8 grid grid-cols-3 gap-8">
                    <Card className="border border-[#d9d9d9] bg-white shadow-md">
                        <CardHeader className="bg-gradient-to-r from-[#e3e3e3] to-[#c7c7c7] pb-2">
                            <CardTitle className="text-xl">Statistiques des Commandes</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="text-4xl font-bold">152</div>
                            <p className="text-sm text-gray-600">Total des Commandes ce Mois</p>
                            <div className="mt-4">
                                <div className="text-lg">
                                    Terminées : <span className="font-semibold">130</span>
                                </div>
                                <div className="text-lg">
                                    En Cours : <span className="font-semibold">22</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border border-[#d9d9d9] bg-white shadow-md">
                        <CardHeader className="bg-gradient-to-r from-[#e3e3e3] to-[#c7c7c7] pb-2">
                            <CardTitle className="text-xl">Statistiques des Clients</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="text-4xl font-bold">87</div>
                            <p className="text-sm text-gray-600">Clients Actifs</p>
                            <div className="mt-4">
                                <div className="text-lg">
                                    Nouveaux ce Mois : <span className="font-semibold">5</span>
                                </div>
                                <div className="text-lg">
                                    Clients Fidèles : <span className="font-semibold">68</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border border-[#d9d9d9] bg-white shadow-md">
                        <CardHeader className="bg-gradient-to-r from-[#e3e3e3] to-[#c7c7c7] pb-2">
                            <CardTitle className="text-xl">Revenus</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="text-4xl font-bold">24 500 €</div>
                            <p className="text-sm text-gray-600">Ce Mois</p>
                            <div className="mt-4">
                                <div className="text-lg">
                                    Mois Dernier : <span className="font-semibold">22 300 €</span>
                                </div>
                                <div className="text-lg">
                                    Croissance :{" "}
                                    <span className="font-semibold text-green-600">+9,87%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Large Buttons */}
                <div className="grid grid-cols-4 gap-8">
                    <Button
                        className="h-40 border border-[#adadad] bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] text-xl font-semibold text-black shadow-md hover:from-[#e1e1e1] hover:to-[#d4d4d4]"
                        onClick={() => openModal("orders")}
                    >
                        <FileText className="mb-2 h-12 w-12" />
                        Commandes
                    </Button>
                    <Button
                        className="h-40 border border-[#adadad] bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] text-xl font-semibold text-black shadow-md hover:from-[#e1e1e1] hover:to-[#d4d4d4]"
                        onClick={() => openModal("clients")}
                    >
                        <Users className="mb-2 h-12 w-12" />
                        Clients
                    </Button>
                    <Button
                        className="h-40 border border-[#adadad] bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] text-xl font-semibold text-black shadow-md hover:from-[#e1e1e1] hover:to-[#d4d4d4]"
                        onClick={() => console.log("Reports clicked")}
                    >
                        <BarChart className="mb-2 h-12 w-12" />
                        Rapports
                    </Button>
                    <Button
                        className="h-40 border border-[#adadad] bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] text-xl font-semibold text-black shadow-md hover:from-[#e1e1e1] hover:to-[#d4d4d4]"
                        onClick={() => openModal("settings")}
                    >
                        <Settings className="mb-2 h-12 w-12" />
                        Paramètres
                    </Button>
                </div>
            </div>

            {/* Status Bar */}
            <div className="flex justify-between border-t border-[#d9d9d9] bg-[#f0f0f0] p-2 text-sm">
                <span>Prêt</span>
                <span>{new Date().toLocaleString()}</span>
            </div>

            {/* Orders Modal */}
            <Dialog open={activeModal === "orders"} onOpenChange={closeModal}>
                <DialogContent className="w-full max-w-4xl border-2 border-[#003c74] bg-[#f0f0f0]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold">
                            Gestion des Commandes
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Input placeholder="Search orders..." className="mr-2 w-64" />
                            <Button variant="secondary" size="icon">
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-[#003c74] text-white hover:bg-[#00295c]">
                            <Plus className="mr-2 h-4 w-4" /> Ajouter une Commande
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID Commande</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.client}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 flex items-center justify-between">
                        <div>Showing 1 to 5 of 5 entries</div>
                        <div className="flex items-center">
                            <Button variant="outline" size="icon" className="mr-2">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Clients Modal */}
            <Dialog open={activeModal === "clients"} onOpenChange={closeModal}>
                <DialogContent className="w-full max-w-4xl border-2 border-[#003c74] bg-[#f0f0f0]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold">
                            Clients Management
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Input placeholder="Search clients..." className="mr-2 w-64" />
                            <Button variant="secondary" size="icon">
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-[#003c74] text-white hover:bg-[#00295c]">
                            <Plus className="mr-2 h-4 w-4" /> Add Client
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Address</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell>{client.id}</TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.email}</TableCell>
                                    <TableCell>{client.phone}</TableCell>
                                    <TableCell>{client.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 flex items-center justify-between">
                        <div>Showing 1 to 5 of 5 entries</div>
                        <div className="flex items-center">
                            <Button variant="outline" size="icon" className="mr-2">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
