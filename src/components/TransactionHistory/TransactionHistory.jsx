import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.mainTable}>
      <thead>
        <tr>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyTable}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.item}>{item.type}</td>
            <td className={css.item}>{item.amount}</td>
            <td className={css.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
