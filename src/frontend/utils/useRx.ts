import {useState, useEffect} from 'react'
import {Observable} from "rxjs";

export function useRx<T>(observable: Observable<T>) {
  const [state, setState] = useState<T | undefined>(undefined);

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
}
