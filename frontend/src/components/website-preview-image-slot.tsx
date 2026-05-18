interface Props {
  imageUrl?: string;
}

export function WebsitePreviewImageSlot({ imageUrl }: Props) {
  return (
    <section
      className="website-preview-slot"
      aria-label="Website preview image placeholder"
    >
      <div className="website-preview-frame">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Website preview screenshot"
            className="website-preview-img"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="website-preview-skeleton" aria-hidden="true">
            <span className="website-preview-skeleton-label">
              Capturing preview…
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
