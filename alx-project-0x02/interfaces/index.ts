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
