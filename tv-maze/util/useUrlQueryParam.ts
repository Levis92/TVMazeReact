import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function useUrlQueryParam(
  paramName: string
): [string, (value: string) => void] {
  const [currentValue, setCurrentValue] = useState("");
  const { query, pathname } = useRouter();

  const setValue = useCallback((value: string) => {
    if (value) {
      setCurrentValue(value);
      const url = `${pathname}?${paramName}=${encodeURIComponent(value)}`;
      // Replace history state to avoid triggering navigation
      history.replaceState(history.state, "", url);
    }
  }, [paramName, pathname]);

  const queryValue = query[paramName];
  
  useEffect(() => {
    setValue(String(queryValue ?? ""));
  }, [queryValue, setValue, paramName])

  return [currentValue, setValue];
}
