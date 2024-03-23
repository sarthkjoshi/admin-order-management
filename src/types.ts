interface StatItemProps {
  label: string;
  value: string | number;
  icon?: string;
}

interface MachineNameProps {
  name: string;
  id: string;
}

interface AmountProps {
  amount: number;
}

interface StatusProps {
  status: string;
}

interface Order {
  id: string;
  date: string;
  time: string;
  machineName: string;
  machineId: string;
  customerName: string;
  contactNumber: string;
  amount: number;
  status: string;
}

interface DateFilterProps {
  label: string;
  date: string;
  onClick: () => void;
}

interface StatusFilterProps {
  status: string;
  onClick: () => void;
}

interface MachineFilterProps {
  machine: string;
  onClick: () => void;
}
