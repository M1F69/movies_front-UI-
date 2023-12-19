export interface AlertInterface {
  text: string;
  // actions: AlertActionInterface[]
  duration: number;
  timeout?: number;
  closable: boolean;
  intent: 'primary' | 'danger' | 'warning' | 'success';
}

export interface AlertOptions {
  // actions?: AlertActionInterface[]
  duration?: number;
  closable?: boolean;
  intent?: 'primary' | 'danger' | 'warning' | 'success';
}

export interface AlertActionInterface {
  text: string;

  onClick(): void;
}
