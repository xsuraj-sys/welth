import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";

export default async function AddTransactionPage() {
  const accountsResponse = await getUserAccounts();

  if (!accountsResponse.success) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-muted-foreground">Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accountsResponse.data}
        categories={defaultCategories}
      />
    </div>
  );
}
