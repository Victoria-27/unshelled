export interface Item {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  export interface ModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }

  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    disableNext: boolean;
  }
  