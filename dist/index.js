import { useState as r, useEffect as h } from "react";
const D = (e) => {
  const [c, a] = r(), [u, o] = r(!1), [f, n] = r(
    void 0
  ), [i, d] = r(null);
  return h(() => {
    (async () => {
      o(!0);
      try {
        const t = await fetch(e), s = await t.json();
        Array.isArray(s) ? n(s) : n([s]), a(t.status);
      } catch (t) {
        console.error(
          `An error occurred while fetching data
####### Error #######
`,
          t
        ), a(404), d(t);
      }
      o(!1);
    })();
  }, [e]), {
    status: c,
    isLoading: u,
    data: f,
    error: i
  };
};
export {
  D as useQuery
};
