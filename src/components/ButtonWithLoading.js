import { Button, Spinner } from "react-bootstrap";

export default function ButtonWithLoading({ buttonText, loading }) {
  return (
    <Button type="submit" className="w-100 mt-2" disabled={loading}>
      {loading && (
        <Spinner
          className="me-2"
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {loading ? "Loading" : buttonText}
    </Button>
  );
}
