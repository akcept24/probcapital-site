import { useLang } from "../i18n/LangContext";

export default function SimDisclaimer() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "12px 24px",
      textAlign: "center",
    }}>
      <p style={{ margin: 0, fontSize: "12px", color: "#6B7090", lineHeight: 1.6, maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
        {ru
          ? <>
              <strong style={{ color: "#8A8FA8" }}>Важно:</strong>{" "}
              ProbCapital — сервис оценки трейдеров. Все счета являются симулированными. Мы не размещаем реальный капитал на рынках. Выплаты производятся Компанией из собственных средств на основе торговых результатов.{" "}
              <a href="/risk" style={{ color: "#00D4AA", textDecoration: "none" }}>Раскрытие рисков</a>
              {" · "}
              <a href="/terms" style={{ color: "#00D4AA", textDecoration: "none" }}>Условия</a>
              {" · "}
              <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none" }}>Возврат</a>
            </>
          : <>
              <strong style={{ color: "#8A8FA8" }}>Important:</strong>{" "}
              ProbCapital is a trader evaluation service. All accounts are simulated. No real capital is placed in markets. Payouts are made by the Company from its own funds based on trading performance.{" "}
              <a href="/risk" style={{ color: "#00D4AA", textDecoration: "none" }}>Risk Disclosure</a>
              {" · "}
              <a href="/terms" style={{ color: "#00D4AA", textDecoration: "none" }}>Terms</a>
              {" · "}
              <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none" }}>Refund Policy</a>
            </>
        }
      </p>
    </div>
  );
}
