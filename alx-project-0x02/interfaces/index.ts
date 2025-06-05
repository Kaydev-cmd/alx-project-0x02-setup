export interface CardProps {
  title: string;
  content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  styles: {
    shape: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  };
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
