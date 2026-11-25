import React from "react";

type ArticleImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

/**
 * An article image that degrades to a quiet, labelled frame when the photo
 * has not been added yet. Editors can drop images into the paths referenced
 * in `src/data/articles.ts` without having to touch the page templates.
 */
const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  alt,
  className,
  loading = "lazy",
}) => {
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`kc-image-placeholder ${className ?? ""}`.trim()}
      >
        <span className="kc-image-placeholder__label">Image to follow</span>
        <span className="kc-image-placeholder__alt">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

export default ArticleImage;
